import '@/public/css/wp-styles.min.css';
import "./globals.css";
import { fontPrimary } from "@/ui/fonts";

export const metadata = {
  title: "Gdyńska Ekipa",
  description: "Naszą misją jest dostarczanie najwyższej jakości usług remontowych, które nie tylko spełniają, ale przewyższają oczekiwania naszych klientów. Wierzymy, że każdy projekt, niezależnie od skali, zasługuje na indywidualne podejście i dbałość o detale.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`text-white ${fontPrimary.className}`}>{children}</body>
    </html>
  );
}
