export default function Home() {
  return (
    <main className="flex-1">
      <section className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <h1 className="text-center text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Welcome to h2o
        </h1>
        <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
          A production-ready Next.js application built with a modern tech stack.
        </p>
      </section>
    </main>
  );
}
