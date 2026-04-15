export const metadata = {
  title: 'Training Zone | Love the Work',
  description: 'Elite basketball training in Herriman, Utah. Private coaching, court rentals, programs and classes — powered by YourStats.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: '#0f0f0f', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
