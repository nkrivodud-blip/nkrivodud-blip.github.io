import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["cyrillic", "latin"], style: ["normal"] });
export const metadata: Metadata = { title: "Зимние события — Парк Сказка", description: "Корпоративные события зимой: площадки, развлечения и гастрономия в Парке Сказка." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="ru"><body className={manrope.variable}>{children}</body></html>; }
