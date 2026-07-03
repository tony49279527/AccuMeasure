"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Settings, Download, Droplet } from "lucide-react";
import type { Product } from "@/lib/types";

const appIcons: Record<string, typeof Droplet> = {
  Droplet,
};

export function ProductTabs({ product }: { product: Product }) {
  return (
    <Tabs defaultValue="specs" className="w-full">
      <TabsList className="w-full justify-start bg-bg-light p-1 h-auto flex-wrap">
        <TabsTrigger value="specs" className="flex items-center gap-2">
          <Settings className="w-4 h-4" /> Specifications
        </TabsTrigger>
        <TabsTrigger value="apps" className="flex items-center gap-2">
          <FileText className="w-4 h-4" /> Applications
        </TabsTrigger>
        <TabsTrigger value="downloads" className="flex items-center gap-2">
          <Download className="w-4 h-4" /> Downloads
        </TabsTrigger>
      </TabsList>

      <TabsContent value="specs" className="mt-6">
        <div className="space-y-8">
          {product.specifications.map((group, gIdx) => (
            <div key={gIdx}>
              <h4 className="text-lg font-semibold text-dark mb-3 pb-2 border-b border-border">
                {group.group}
              </h4>
              <div className="grid md:grid-cols-2 gap-x-8">
                {group.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="flex justify-between py-2 border-b border-border/50"
                  >
                    <span className="text-muted text-sm">{item.param}</span>
                    <span className="text-dark text-sm font-mono-num font-medium">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="apps" className="mt-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {product.applications.map((app, idx) => {
            const Icon = appIcons[app.icon] || Droplet;
            return (
              <div
                key={idx}
                className="p-6 border border-border rounded-xl hover:border-accent transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-dark mb-2">{app.name}</h4>
                <p className="text-muted text-sm">{app.description}</p>
              </div>
            );
          })}
        </div>
      </TabsContent>

      <TabsContent value="downloads" className="mt-6">
        <div className="space-y-3">
          {product.downloads.map((dl, idx) => (
            <a
              key={idx}
              href={dl.url}
              className="flex items-center justify-between p-4 border border-border rounded-xl hover:border-accent hover:bg-bg-light transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-dark">{dl.name}</div>
                  <div className="text-muted text-xs uppercase">{dl.type}</div>
                </div>
              </div>
              <Download className="w-5 h-5 text-muted group-hover:text-accent" />
            </a>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
