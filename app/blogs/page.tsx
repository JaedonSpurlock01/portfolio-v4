import Posts from "@/components/posts";
import StaggerContainer from "@/components/ui/stagger-container";

export default function Blog() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] page-layout h-full justify-between">
      <div className="flex flex-col h-full items-center">
        <StaggerContainer className="flex flex-col gap-8 max-content-width">
          <Posts />
        </StaggerContainer>
      </div>
    </div>
  );
}
