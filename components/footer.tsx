export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 py-12 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto flex justify-between items-center flex-col sm:flex-row gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Talgat Zakiryanov. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Backend Developer | SaaS Specialist | Based in Almaty, Kazakhstan
        </p>
      </div>
    </footer>
  )
}
