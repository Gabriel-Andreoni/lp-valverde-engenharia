import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ 
  weight: ['500', '700', '900'],
  subsets: ["latin"] ,
});

export const metadata = {
  title: "Valverde Engenharia",
  description: "Especializada em laudos AVCB e CLCB. Oferecemos soluções rápidas e eficientes para regularização e certificação de segurança contra incêndio. Confie em nossa expertise para garantir a segurança do seu empreendimento.",
  icons: {
    icon: "/favicon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
