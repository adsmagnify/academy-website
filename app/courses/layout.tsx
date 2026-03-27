import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Courses in Mumbai | AI-Powered Training | Adsmagnify Academy",
  description: "Master AI-powered digital marketing with our comprehensive courses. Live projects, shadow internships, and only 4 students per batch. Sunday classes in Churchgate, Mumbai. Batch 9 starts 19th April 2026.",
  keywords: "digital marketing courses Mumbai, AI marketing training, performance marketing course, SEO training Mumbai, Google Ads course, Meta Ads training, Churchgate digital marketing",
  openGraph: {
    title: "Digital Marketing Courses in Mumbai | AI-Powered Training | Adsmagnify Academy",
    description: "Master AI-powered digital marketing with our comprehensive courses. Live projects, shadow internships, and only 4 students per batch.",
    url: "https://adsmagnify.vercel.app/courses"
  }
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
