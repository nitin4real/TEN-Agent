// import { ConfigProvider } from "antd";
import { StoreProvider } from "@/store"
import type { Metadata, Viewport } from "next"
import { Toaster } from "@/components/ui/sonner"

import "./global.css"

export const metadata: Metadata = {
  title: "Dubverse Demo",
  description:
    "Dubverse TTS Demo.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
        {/* <Toaster richColors closeButton /> */}
      </body>
    </html>
  )
}
