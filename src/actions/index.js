import { GITHUB_ALL_ISSUES, GITHUB_ALL_ISSUES_FAILURE } from './types';


export const GetGithubIssues = (issueState = 'all') => async (dispatch) => {
    // const GithubApiURL = `http://localhost:2020/github`;
    const GithubApiURL = `http://api.github.com/repos/facebook/jest/issues?state=${issueState}`;
    const response = await fetch(GithubApiURL);
    if (response.ok) {
        let issueList = await response.json();
        dispatch({
            type: GITHUB_ALL_ISSUES,
            payload: issueList
        });
    } else {
        dispatch({
            type: GITHUB_ALL_ISSUES_FAILURE,
            payload: 'Something went wrong !! \n Try Again ...'
        });
    }
}
