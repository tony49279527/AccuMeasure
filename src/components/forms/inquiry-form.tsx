"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageSquare, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  inquirySchema,
  countryList,
  productInterestOptions,
} from "@/lib/schema";
import type { InquiryValues } from "@/lib/schema";

interface InquiryFormProps {
  productId?: string;
  productName?: string;
  defaultInterest?: string;
  defaultMessage?: string;
}

export function InquiryForm({
  productId,
  productName,
  defaultInterest,
  defaultMessage,
}: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      productInterest: defaultInterest ? [defaultInterest] : [],
      productId: productId,
      message: defaultMessage,
    },
  });

  const watchedInterest = watch("productInterest");

  const toggleInterest = (option: string) => {
    const current = watchedInterest ?? [];
    const next = current.includes(option)
      ? current.filter((o) => o !== option)
      : [...current, option];
    setValue("productInterest", next, { shouldValidate: true });
  };

  const onSubmit = async (values: InquiryValues) => {
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, formType: "inquiry" }),
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
        <h3 className="text-2xl font-bold text-dark mb-2">Inquiry Sent!</h3>
        <p className="text-muted mb-6">
          We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-secondary"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {productName && (
        <div className="bg-cta/5 border border-cta/20 rounded-lg p-4 text-sm">
          <span className="text-muted">Inquiring about: </span>
          <span className="font-semibold text-dark">{productName}</span>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 bg-danger/10 border border-danger/20 text-danger rounded-lg p-4 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          {errorMsg}
        </div>
      )}

      <input type="hidden" {...register("productId")} />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input id="name" placeholder="Your name" {...register("name")} />
          {errors.name && (
            <p className="text-danger text-xs">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company *</Label>
          <Input id="company" placeholder="Your company" {...register("company")} />
          {errors.company && (
            <p className="text-danger text-xs">{errors.company.message}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-danger text-xs">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="wa">WhatsApp / Phone</Label>
          <Input id="wa" placeholder="+86-xxx-xxxx-xxxx" {...register("whatsapp")} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="country">Country *</Label>
          <select
            id="country"
            className="w-full h-10 px-3 rounded-lg border border-border bg-white text-sm text-dark"
            defaultValue=""
            {...register("country")}
          >
            <option value="" disabled>
              Select your country
            </option>
            {countryList.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.country && (
            <p className="text-danger text-xs">{errors.country.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="quantity">Estimated Quantity</Label>
          <Input id="quantity" type="number" placeholder="e.g. 100" {...register("quantity")} />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Product Interest *</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {productInterestOptions.map((p) => {
            const checked = watchedInterest?.includes(p) ?? false;
            return (
              <button
                type="button"
                key={p}
                onClick={() => toggleInterest(p)}
                className={`flex items-center gap-2 p-3 border rounded-lg cursor-pointer transition-colors text-sm ${
                  checked
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-border hover:bg-bg-light text-muted"
                }`}
              >
                <span
                  className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${
                    checked ? "bg-primary border-primary" : "border-border"
                  }`}
                >
                  {checked && (
                    <CheckCircle className="w-3 h-3 text-white" />
                  )}
                </span>
                {p}
              </button>
            );
          })}
        </div>
        {errors.productInterest && (
          <p className="text-danger text-xs">{errors.productInterest.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message / Requirements</Label>
        <Textarea
          id="message"
          rows={5}
          defaultValue={defaultMessage}
          placeholder="Tell us about your application and requirements..."
          {...register("message")}
        />
      </div>

      <div className="space-y-2">
        <label className="flex items-start gap-2 text-sm text-muted cursor-pointer">
          <input
            type="checkbox"
            className="mt-1"
            {...register("privacy")}
          />
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
            Sending...
          </>
        ) : (
          <>
            <MessageSquare className="w-5 h-5" />
            Send Inquiry
          </>
        )}
      </button>
    </form>
  );
}
