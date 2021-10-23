# < Title: Work Day Scheduler>

# < BootCampBerlin: 05-homework-ThirdPartyAPIs >

## Description

It is a simple and effective code to represent a daily calendar. Showing the actual time at each day, the user is able to see her/his calendar, simply by adding the task in rows. The coloring may help the user to have a better perception of daily activities.

## Technical issues

The code consists of two main parts, the header and the calendar. The upper one works by the aid of moment function and the lower one uses the bootstrap table, a function to color the rows comparing to current time and another one to save the selected schedule in local storage. The main syntax is based on jquary selectors, that's why we see each instead of for $ instead of getElement and so on. Clicking each save button the code reads the content of sibling of this button and the id of this button we use these two variables later to feed the key and value of localStorage.setItem. Later on we have to get the localstorage Item back to value of decription class to make the user able to see her/his schedule after refreshing the page.

## Links

[URL](https://amir-fard2025.github.io/05-homework/)
[Github](https://github.com/Amir-Fard2025/05-homework)

## List of screenshots

![structure of the code](./images/01_Structure.png)
![Appearance criteria of the page](./images/02-Calender.png)
![Technical issues of the code](./images/03-localStorage.png)
