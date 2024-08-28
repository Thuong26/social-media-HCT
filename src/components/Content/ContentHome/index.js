import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import classNames from "classnames/bind";
import styles from "./ContentHome.module.scss";
import EntryFooter from "~/components/EntryFooter";
import CarouselOverlay from "~/components/CarouselOverlay";
import "bootstrap/dist/css/bootstrap.min.css";
import { mockPosts } from "~/DataList";

const cx = classNames.bind(styles);

const POSTS_PER_PAGE = 5;

function ContentHome() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setPosts(mockPosts);
  }, []);

  if (posts.length === 0) {
    return <div>No posts found</div>;
  }

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Helmet>
        <title> Hồ Công Thắng </title>
      </Helmet>
      <div className={cx("wrapper")}>
        <div className={cx("content")}>
          {currentPosts.map((post) => {
            const truncatedText = post.content.length > 300
              ? post.content.substring(0, 795) + "..."
              : post.content;

            const imageGalleryClass = post.picture
              ? cx("image-gallery", "single-image") 
              : cx("image-gallery");

            return (
              <div key={post.id} className={cx("posts")}>
                <CarouselOverlay
                  title={post.title}
                  link={post.link}
                  postDate={post.postDate || "Unknown Date"}
                  customOverlay={cx(styles.customoverlay)}
                />
                <div className={imageGalleryClass}>
                  {post.picture ? (
                    <img
                      src={post.picture}
                      alt={post.title}
                      className={cx("post-image")}
                    />
                  ) : (
                    <p>No images available</p>
                  )}
                </div>
                <div className={cx("entry-summary")}>
                  <p>{truncatedText}</p>
                  <a href={post.link} className={cx("continue-reading")}>
                    ĐỌC TIẾP...
                  </a>
                </div>
                <EntryFooter leaveCommentHref={post.link} />
              </div>
            );
          })}
        </div>
      </div>
      <nav>
          <ul className={cx("pagination")}>
            {currentPage > 1 && (
              <li className={cx("page-item")}>
                <button
                  className={cx("page-link")}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Trước
                </button>
              </li>
            )}
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index + 1}
                className={cx("page-item", { active: index + 1 === currentPage })}
              >
                <button
                  className={cx("page-link")}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            {currentPage < totalPages && (
              <li className={cx("page-item")}>
                <button
                  className={cx("page-link")}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Tiếp
                </button>
              </li>
            )}
          </ul>
        </nav>
    </div>
  );
}

export default ContentHome;
