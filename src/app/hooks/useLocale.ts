// app/hooks/useLocale.ts
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export function useLocale() {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const locale = useMemo(() => {
    if (!isMounted) return "en"; // prevent hydration mismatch
    const firstSegment = pathname.split("/")[1];
    return firstSegment === "id" ? "id" : "en";
  }, [isMounted, pathname]);

  const switchLocale = () => {
    const segments = pathname.split("/");
    segments[1] = locale === "en" ? "id" : "en";
    const newPath = segments.join("/") || "/";
    router.push(newPath);
  };

  return { locale, isMounted, switchLocale };
}
