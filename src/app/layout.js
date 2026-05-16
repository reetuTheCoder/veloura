import './globals.css'

export const metadata = {
  title: 'Veloura | West Hollywood',
  description: 'Experience luxury and comfort in the heart of West Hollywood',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
