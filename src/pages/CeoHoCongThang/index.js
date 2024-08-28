import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import classNames from "classnames/bind";
import styles from "./Fashion.module.scss";
import CarouselOverlay from "~/components/CarouselOverlay";
import { mockPosts } from "~/DataList";

const cx = classNames.bind(styles);

const POSTS_PER_PAGE = 5;

function Fashion() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setPosts(mockPosts.slice(0, 6));
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
        <title>CEO Hồ Công Thắng </title>
      </Helmet>
      <div className={cx("wrapper")}>
        <div className={cx("content")}>
          {currentPosts.map((post) => (
            <div key={post.id} className={cx("card-post")}>
              <a href={post.link}>
                <img
                  src={post.picture}
                  alt={post.title}
                />
              </a>
              <div className={cx("card-content")}>
                <CarouselOverlay
                  title={post.title}
                  postDate={post.postDate || "Unknown Date"}
                  link={post.link}
                  customTitle="custom-title"
                  customePostDay="custom-postday"
                />
                <div className={cx("entry-summary1")}>
                  <p>
                    {post.content.length > 300
                      ? post.content.substring(0, 300) + "..."
                      : post.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
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

export default Fashion;
