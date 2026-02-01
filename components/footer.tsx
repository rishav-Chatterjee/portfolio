export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t glass py-2 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Rishav Chatterjee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
