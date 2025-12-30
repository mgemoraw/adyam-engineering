import { useEffect } from "react";

interface MetaHeadProps {
  title: string;
  description?: string;
}

const MetaHead = ({ title, description }: MetaHeadProps) => {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Set meta description
    if (description) {
      let meta = document.querySelector("meta[name='description']");
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }
  }, [title, description]);

  return null; // This component does not render anything
};

export default MetaHead;
