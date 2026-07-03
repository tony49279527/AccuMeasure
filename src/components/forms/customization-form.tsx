"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Loader2, AlertCircle, Upload, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  customizationSchema,
  customizationTypes,
  productCategories,
} from "@/lib/schema";
import type { CustomizationValues } from "@/lib/schema";

export function CustomizationForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<CustomizationValues>({
    resolver: zodResolver(customizationSchema),
    defaultValues: {
      customizationType: "",
      productCategory: "",
    },
  });

  const onSubmit = async (values: CustomizationValues) => {
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, formType: "customization" }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Submission failed. Please try again.");
      }
      setStatus("success");
      reset();
    } catch (e) {
      setStatus("error");
      setErrorMsg(e instanceof Error ? e.message : "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-success" />
        </div>
        <h3 className="text-2xl font-bold text-dark mb-2">Request Sent!</h3>
        <p className="text-muted mb-6">
          Our engineering team will review your requirements and reply within 24 hours.
        </p>
        <button onClick={() => setStatus("idle")} className="btn-secondary">
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {status === "error" && (
        <div className="flex items-center gap-2 bg-danger/10 border border-danger/20 text-danger rounded-lg p-4 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          {errorMsg}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="c-name">Name *</Label>
          <Input id="c-name" placeholder="Your name" {...register("name")} />
          {errors.name && (
            <p className="text-danger text-xs">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="c-company">Company *</Label>
          <Input id="c-company" placeholder="Your company" {...register("company")} />
          {errors.company && (
            <p className="text-danger text-xs">{errors.company.message}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="c-email">Email *</Label>
          <Input
            id="c-email"
            type="email"
            placeholder="you@company.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-danger text-xs">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="c-wa">WhatsApp / Phone</Label>
          <Input id="c-wa" placeholder="+86-xxx-xxxx-xxxx" {...register("whatsapp")} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="c-type">Customization Type *</Label>
          <select
            id="c-type"
            className="w-full h-10 px-3 rounded-lg border border-border bg-white text-sm text-dark"
            defaultValue=""
            {...register("customizationType")}
          >
            <option value="" disabled>
              Select a type
            </option>
            {customizationTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.customizationType && (
            <p className="text-danger text-xs">{errors.customizationType.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="c-cat">Product Category *</Label>
          <select
            id="c-cat"
            className="w-full h-10 px-3 rounded-lg border border-border bg-white text-sm text-dark"
            defaultValue=""
            {...register("productCategory")}
          >
            <option value="" disabled>
              Select a category
            </option>
            {productCategories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.productCategory && (
            <p className="text-danger text-xs">{errors.productCategory.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="c-qty">Estimated Quantity</Label>
        <Input id="c-qty" type="number" placeholder="e.g. 500" {...register("quantity")} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="c-req">Technical Requirements *</Label>
        <Textarea
          id="c-req"
          rows={6}
          placeholder="Describe your specs: temperature range, pressure range, materials, output signal, special conditions, etc."
          {...register("requirements")}
        />
        {errors.requirements && (
          <p className="text-danger text-xs">{errors.requirements.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="c-file">Upload Spec / Drawing (optional)</Label>
        <div className="flex items-center gap-3 p-4 border border-dashed border-border rounded-lg text-muted text-sm">
          <Upload className="w-5 h-5 text-muted" />
          <input
            id="c-file"
            type="file"
            className="text-sm flex-1"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) {
                setValue("fileName", f.name);
              }
            }}
          />
          <span className="text-xs">PDF, DWG, STEP, max 20MB</span>
        </div>
      </div>

      <div className="space-y-2">
        <label className="flex items-start gap-2 text-sm text-muted cursor-pointer">
          <input type="checkbox" className="mt-1" {...register("privacy")} />
          <span>
            I agree to the{" "}
            <a href="/privacy" className="text-accent underline">
              privacy policy
            </a>
          </span>
        </label>
        {errors.privacy && (
          <p className="text-danger text-xs">{errors.privacy.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Submit Request
          </>
        )}
      </button>
    </form>
  );
}
