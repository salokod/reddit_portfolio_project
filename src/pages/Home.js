import React, { useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadSubreddit } from "../actions/subredditAction";
//components
import SubredditList from "../components/subredditList";
import Posts from "../components/Posts";
import SpecificPosts from "../components/chosenPosts";
import Comments from "../components/Comments";
//styles and motion
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
//react router
import { useLocation } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSubreddit());
  }, [dispatch]);

  //GET THE DATA BACK FROM THE ABOVE FETCH/STATE
  const { categories, initialposts } = useSelector((state) => state.subreddit);
  const { chosenPosts } = useSelector((state) => state.chosenPosts);
  const { commentPosts, mainPost } = useSelector((state) => state.comments);

  return (
    <MainContainer>
      <CategoryList>
        <h1>Subreddit Categories</h1>
        {categories.map((category) => (
          <SubredditList
            category={category.data.display_name_prefixed}
            key={category.data.id}
          />
        ))}
      </CategoryList>
      {commentPosts.length ? (
        <Comments />
      ) : (
        "" //this line item renders the '' with ? on line 40.  so if the length is 0, render ''
      )}
      {/* {mainPost.map((main) => (
        <CommentsList>
          <p>Main Title: {main.data.title}</p>
          {commentPosts.map((comment) => (
            <div>
              <Comments body={comment.data.body} />
            </div>
          ))}
        </CommentsList>
      ))} */}
      {chosenPosts.length ? (
        <PostList>
          {chosenPosts.map((post) => (
            <div>
              <Posts
                title={post.data.title}
                ups={post.data.ups}
                thumb={post.data.thumbnail}
                key={post.data.id}
                id={post.data.id}
                subreddit={post.data.subreddit}
              />
            </div>
          ))}
        </PostList>
      ) : (
        "" //this line item renders the '' with ? on line 40.  so if the length is 0, render ''
      )}
      {initialposts.length ? (
        <PostList>
          {initialposts.map((post) => (
            <Posts
              title={post.data.title}
              ups={post.data.ups}
              thumb={post.data.thumbnail}
              key={post.data.id}
              id={post.data.id}
              subreddit={post.data.subreddit}
            />
          ))}
        </PostList>
      ) : (
        "" //this line item renders the '' with ? on line 40.  so if the length is 0, render ''
      )}
    </MainContainer>
  );
};
const MainContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50px 50px;
  grid-gap: 5px;
`;

const PostList = styled(motion.div)`
  grid-column: 2 / span 2;
`;

const CategoryList = styled(motion.div)`
  grid-column: 1;
`;

const CommentsList = styled(motion.div)`
  background: black;
  z-index: 5;
  position: relative;
`;
