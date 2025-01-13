import axios from 'axios';
import { SELECT_REPO, SET_FOLLOWERS, SET_REPO_DETAILS, SET_REPOS, SET_USER_DATA } from './actionTypes';

 const API_BASE_URL =  "https://git-api-access.onrender.com"


export const fetchUserData = (username) => async (dispatch) => {
  try {
    // Fetch user data
    const { data: userData } = await axios.get(`${API_BASE_URL}/users/${username}`);
    console.log('API Response:', userData); 

    // Dispatch user data
    dispatch({ type: SET_USER_DATA, payload: userData });

    // Fetch repositories using the repos_url from user data
    const { data: repos } = await axios.get(userData.repos_url);
    console.log('Repos:', repos);

    // Dispatch repositories data
    dispatch({ type: SET_REPOS, payload: repos });
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};

export const selectRepo = (repo) => async (dispatch) => {
    try{
        dispatch({type: SELECT_REPO, payload: repo})
    }catch(error){
        console.error(error);
    }  
};

export const fetchRepoDetails = (username, repoName) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/repos/${username}/${repoName}`);
    dispatch({ type: SET_REPO_DETAILS, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const fetchFollowers = (username) => async (dispatch) => {
  console.log(username)
  try {
    const { data } = await axios.get(`${API_BASE_URL}/users/${username}/followers`);
    console.log(data);
    dispatch({ type: SET_FOLLOWERS, payload: data });
  } catch (error) {
    console.error(error);
  }
};


