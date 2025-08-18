import Image from "next/image";
import { socialLinks } from "./lib/config";
import SkillsSection from "./components/skillsSection";
const styles = {
  section: "w-full",
  headerTitle: "section-title",
  headerTitleStyle: {
    color: "var(--headline)",
    borderColor: "var(--border)",
  },
  headerSubTitle: "font-jetbrains-mono text-sm font-normal tracking-wider",
  headerSubTitleStyle: { color: "var(--secondary)" },
  headerDesc: "font-figtree text-sm mt-2 mb-4",
  headerDescStyle: { color: "var(--paragraph)" },
  categoryTitle: "text-[11px] font-figtree font-medium mb-1 uppercase tracking-wider",
  categoryTitleStyle: { color: "var(--paragraph)" },
  skillButton:
    "flex items-center cursor-default rounded-lg px-3 py-2 font-medium text-xs gap-2 shadow transition focus:outline-none",
  skillButtonStyle: {
    backgroundColor: "var(--card-background)",
    border: "none",
    color: "var(--headline)",
  },
};
export default function Page() {
  
  return (
    <div className="flex flex-col gap-5">
      <section>
        <a href={socialLinks.twitter} target="_blank">
          <Image
            src="/profile.png"
            alt="Profile photo"
            className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
            unoptimized
            width={160}
            height={160}
            priority
          />
        </a>
        <h1 className="mb-8 text-2xl font-medium">About me</h1>
        <div className="prose prose-neutral dark:prose-invert">
  <p>
    I'm Augustine — a clean, fast, and lightweight developer who builds with Next.js,
    Vercel, and Tailwind CSS. I care deeply about performance, simplicity, and elegant design.
  </p>
  <p>
    I bring everything you need to a modern web project: MDX blogging, SEO strategy, RSS,
    Atom & JSON feeds, analytics, Tweet & YouTube embeds, KaTeX, and{" "}
    <a
      target="_blank"
      href="https://github.com/1msirius/Nextfolio?tab=readme-ov-file#features"
    >
      more
    </a>
    .
  </p>
  <p>
    My work is {" "}
    <a href={socialLinks.github} target="_blank">
      open-source
    </a>{" "}
    and fully customizable — I love building tools that others can use, remix, and improve.
  </p>
  <p>
    I deploy projects with Vercel in minutes and write clear setup guides to help others
    get started quickly. Check out my{" "}
    <a href="/blog/getting-started">Getting Started</a> post to see how I work.
  </p>
  <p>
    Inspired by great developers , but I bring my own unique style, ideas, and energy to every project I touch.
  </p>
</div>
      </section>
      <section className={styles.section}>
      <header>
        <h1
          className={"flex items-center gap-2 pt-2 text-2xl font-bold capitalize"}
          style={styles.headerTitleStyle}
        >
          Skills{" "}
          <span
            className={styles.headerSubTitle}
            style={styles.headerSubTitleStyle}
            data-ninja-font="jetbrainsmono_regular_normal_smv0q"
          >
            Which I use/know
          </span>
        </h1>
        <p
          className={styles.headerDesc}
          style={styles.headerDescStyle}
          data-ninja-font="figtree_light_normal_rmlnd"
        >
          These are the technologies I've learned and worked with. This list is
          constantly evolving as I continue to learn and grow as a developer.
        </p>
      </header>

      <SkillsSection/>
    </section>
    </div>
  );
}
