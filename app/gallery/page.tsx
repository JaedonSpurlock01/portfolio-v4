import Photos from "@/components/photos";
import StaggerContainer from "@/components/ui/stagger-container";
import React from "react";

export default function GalleryPage() {
  return (
    <StaggerContainer className="contents">
      <Photos />
    </StaggerContainer>
  );
}
