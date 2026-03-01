import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import ProjectCard from "../../src/components/ProjectCard.vue";

describe("ProjectCard.vue", () => {
  const defaultProps = {
    title: "Test Project",
    description: "This is a test description.",
    imageUrl: "https://example.com/image.jpg",
    demoUrl: "https://demo.com",
    tags: ["Vue", "Vite"],
  };

  it("renders title and description correctly", () => {
    const wrapper = mount(ProjectCard, { props: defaultProps });
    expect(wrapper.text()).toContain("Test Project");
    expect(wrapper.text()).toContain("This is a test description.");
  });

  it("renders tags correctly", () => {
    const wrapper = mount(ProjectCard, { props: defaultProps });
    const tags = wrapper.findAll(".badge");
    expect(tags.length).toBe(2);
    expect(tags[0].text()).toBe("Vue");
  });

  it("shows source code button only when githubUrl is provided", async () => {
    // 沒有提供 githubUrl
    let wrapper = mount(ProjectCard, { props: defaultProps });
    expect(wrapper.find('a[href="https://demo.com"]').exists()).toBe(true);
    expect(wrapper.text()).not.toContain("Source Code");

    // 提供 githubUrl
    wrapper = mount(ProjectCard, {
      props: { ...defaultProps, githubUrl: "https://github.com" },
    });
    expect(wrapper.find('a[href="https://github.com"]').exists()).toBe(true);
    expect(wrapper.text()).toContain("Source Code");
  });

  it("renders image with correct src and alt", () => {
    const wrapper = mount(ProjectCard, { props: defaultProps });
    const img = wrapper.find("img");
    expect(img.attributes("src")).toBe("https://example.com/image.jpg");
    expect(img.attributes("alt")).toBe("Test Project");
  });
});
