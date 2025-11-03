import React, { useEffect, useState } from "react";
import { blogs as blogData } from "../Constants/Data";
import PageBanner from "../Components/PageBanner";
import BlogCard from "../Components/BlogCard";
import Button from "../Components/Button";
import Star from "../assets/Images/star.png";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleServicesCount, setVisibleServicesCount] = useState(6);
  const [blogs, setBlogs] = useState([]);

  const categories = [
    "All",
    "House",
    "Office",
    "Kitchen",
    "Bathroom",
    "Plumbing",
  ];

  // Ensure blogs are only set on the client side
  useEffect(() => {
    setBlogs(blogData);
  }, []);

  const filteredServices =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((service) =>
          service?.title?.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  const handleLoadMore = () => {
    setVisibleServicesCount((prevCount) => prevCount + 6);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleServicesCount(6);
  };

  return (
    <>
      <div className="container-fluid p-0">
        <PageBanner
          title="Blogs"
          subtitle="Home / Blogs"
          backgroundImage="/hero.jpg"
        />

        {/* Gallery section */}
        <section className="py-5">
          <div className="container pb-5">
            <h2 className="fw-semibold heading text-uppercase d-flex align-items-center justify-content-center gap-2 mb-5">
              <img
                className="star"
                src={Star}
                alt="Star"
                style={{ width: "30px", height: "30px" }}
              ></img>
              Our Blogs
            </h2>

            <div className="row g-4 pb-5">
              {filteredServices.length > 0 ? (
                filteredServices
                  .slice(0, visibleServicesCount)
                  .map((service) => (
                    <BlogCard key={service.id} service={service} />
                  ))
              ) : (
                <p className="text-center text-muted">
                  No services available for this category.
                </p>
              )}
            </div>

            {visibleServicesCount < filteredServices.length && (
              <div className="d-flex align-items-center justify-content-center gap-3 py-3">
                <Button text="Load More" onClick={handleLoadMore} />
              </div>
            )}
          </div>
        </section>
      </div>{" "}
    </>
  );
}