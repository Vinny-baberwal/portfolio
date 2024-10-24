import Header from "@/components/Header";
import "./globals.css"; 

export const dynamic = 'force-dynamic'
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
 

  return (
    <html lang="en">
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=ggbvm-ddfk52fdfklf`}></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'ggbvm-ddfk52fdfklf');`
        }}>
        </script> 
      </head>
      <body >
        <Header/>
        {children} 
      </body>
    </html>
  );
}
