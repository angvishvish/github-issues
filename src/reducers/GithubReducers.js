import { GITHUB_ALL_ISSUES, GITHUB_ALL_ISSUES_FAILURE } from "../actions/types";

const INITIAL_STATE = {
    issues: [],
    error: null
}

export const GithubReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GITHUB_ALL_ISSUES: {
            return { ...state, issues: action.payload }
        }
        case GITHUB_ALL_ISSUES_FAILURE: {
            return { ...state, error: action.payload }
        }
        default: {
            return state;
        }
    }
}
