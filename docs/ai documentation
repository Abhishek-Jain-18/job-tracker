# AI Documentation

This document tracks the prompts, context, AI responses, and resulting changes made during the development of the Job Application Tracker (MERN stack).

| Prompt No. | Context / Question | AI Response / Action Taken | Resulting Change in Code |
|------------|------------------|---------------------------|--------------------------|
| 1 | Asked for ideas for a MERN CRUD application | AI suggested a Job Application Tracker with fields like company, position, status, applied date, response date, notes | Chose Job Tracker as the project domain |
| 2 | Asked for step-by-step backend setup | AI provided Express + MongoDB backend steps, including model, controller, routes | Backend skeleton created: models (`User.js`, `Job.js`), controllers, routes, server setup |
| 3 | Asked to include a derived field | AI suggested “daysToResponse” calculated as difference between responseDate and appliedDate | Added derived field in Job schema and dashboard calculation |
| 4 | UI alignment issue: date input was on next line | AI suggested CSS `.form-row { display: flex; align-items: center; }` and proper label width | JobForm layout updated, inputs aligned with labels |
| 5 | Login refresh issue after storing token | AI explained that relying on localStorage alone doesn’t trigger re-render | Updated `App.js` to include `user` state and passed `setUser` to login and dashboard; login now redirects without refresh |
| 6 | Logout causing 401 errors in console | AI explained that components were calling API after token removal | Added `user` check in fetchJobs, Axios interceptor suggestion; handled logout cleanly |

