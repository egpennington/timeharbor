import { userActivities } from "./data.js"

// Function to update the date
function updateDate() {
    const dateDiv = document.getElementById('date');
    const today = new Date();
    const formattedDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
    dateDiv.textContent = `Today: ${formattedDate}`;
}

// Call the function to update the date content when the page loads
updateDate();


// Select the container where you want to append the generated HTML
const contentActivityContainer = document.querySelector('.content-activity');

// Iterate over each category in the userActivities array
for (let category of userActivities) {
    // Create a new div element for the category
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('content-activity');

    // Create an h2 element for the category name
    const categoryNameHeading = document.createElement('h2');
    categoryNameHeading.classList.add('category-name');
    categoryNameHeading.textContent = category.categoryName;
    categoryDiv.appendChild(categoryNameHeading);

    // Iterate over each activity type in the category
    for (let activityType of category.activityTypes) {
        // Create a new div element for each activity
        const activityDiv = document.createElement('div');
        activityDiv.classList.add('content-main');

        // Create an img element for the ellipse checkbox
        const ellipseImg = document.createElement('img');
        ellipseImg.src = "/img/Ellipse 8.svg";
        ellipseImg.alt = "ellipse checkbox";
        ellipseImg.classList.add('ellipse');
        activityDiv.appendChild(ellipseImg);

        // Create a div element for the content inner
        const contentInnerDiv = document.createElement('div');
        contentInnerDiv.classList.add('content-inner');

        // Create a div element for the content task
        const contentTaskDiv = document.createElement('div');
        contentTaskDiv.classList.add('content-task');

        // Create an h3 element for the activity name
        const activityNameHeading = document.createElement('h3');
        activityNameHeading.classList.add('activity');
        activityNameHeading.textContent = activityType.activityName;
        contentTaskDiv.appendChild(activityNameHeading);

        // Create a button element for the priority
        const priorityBtn = document.createElement('a');
        priorityBtn.href = "#";
        priorityBtn.classList.add('btn', 'btn-lite', 'btn-blue'); // Add classes for styling
        priorityBtn.textContent = "Low"; // You can dynamically set the priority here based on your data
        contentTaskDiv.appendChild(priorityBtn);

        // Append the content task div to the content inner div
        contentInnerDiv.appendChild(contentTaskDiv);

        // Create a div element for the content description
const contentDescriptionDiv = document.createElement('div');
contentDescriptionDiv.classList.add('content-description');

// Create a div for the paragraphs
const contentParaDiv = document.createElement('div');
contentParaDiv.classList.add('content-para');

// Create a div element for the content description edit
const contentDescriptionEditDiv = document.createElement('div');
contentDescriptionEditDiv.classList.add('content-description-edit');

// Append the contentParaDiv and contentDescriptionEditDiv to contentDescriptionDiv
contentDescriptionDiv.appendChild(contentParaDiv);
contentDescriptionDiv.appendChild(contentDescriptionEditDiv);

// Create a p element for the task name
for (let task of activityType.Tasks) {
    console.log("Tasks: ", task.taskName);
    const taskNameParagraph = document.createElement('p');
    taskNameParagraph.classList.add('task-name');
    taskNameParagraph.textContent = task.taskName;
    contentParaDiv.appendChild(taskNameParagraph);
}

// Create img elements for the edit pencil and trash icons
const editPencilImg = document.createElement('img');
editPencilImg.src = "/img/mynaui_pencil.svg";
editPencilImg.alt = "edit pencil image";
editPencilImg.classList.add('icon-edit');
contentDescriptionEditDiv.appendChild(editPencilImg);

const trashImg = document.createElement('img');
trashImg.src = "/img/ph_trash.svg";
trashImg.alt = "delete trash can image";
trashImg.classList.add('icon-edit');
contentDescriptionEditDiv.appendChild(trashImg);


        // // Create a div element for the content description
        // const contentDescriptionDiv = document.createElement('div');
        // contentDescriptionDiv.classList.add('content-description');

        // const contentParaDiv = document.createElement('div')
        // contentParaDiv.classList.add('content-para')

        // // Create a p element for the task name
        // for (let task of activityType.Tasks) {
        //     console.log("Tasks: ", task.taskName)
        //     const taskNameParagraph = document.createElement('p');
        //     taskNameParagraph.classList.add('task-name');
        //     taskNameParagraph.textContent = task.taskName; // You can dynamically set the task name here based on your data
        //     // contentDescriptionDiv.appendChild(taskNameParagraph);
        //     contentParaDiv.appendChild(taskNameParagraph)
        // }
        
        // // Create a div element for the content description edit
        // const contentDescriptionEditDiv = document.createElement('div');
        // contentDescriptionEditDiv.classList.add('content-description-edit');

        // // Create img elements for the edit pencil and trash icons
        // const editPencilImg = document.createElement('img');
        // editPencilImg.src = "/img/mynaui_pencil.svg";
        // editPencilImg.alt = "edit pencil image";
        // editPencilImg.classList.add('icon-edit');
        // contentDescriptionEditDiv.appendChild(editPencilImg);

        // const trashImg = document.createElement('img');
        // trashImg.src = "/img/ph_trash.svg";
        // trashImg.alt = "delete trash can image";
        // trashImg.classList.add('icon-edit');
        // contentDescriptionEditDiv.appendChild(trashImg);

        // Append the content description edit div to the content description div
        contentDescriptionDiv.appendChild(contentDescriptionEditDiv);

        // Append the content description div to the content inner div
        contentInnerDiv.appendChild(contentDescriptionDiv);

        // Append the content inner div to the activity div
        activityDiv.appendChild(contentInnerDiv);

        // Append the activity div to the category div
        categoryDiv.appendChild(activityDiv);
    }

    // Append the category div to the content activity container
    contentActivityContainer.appendChild(categoryDiv);
}







    // Select the container where you want to append the generated HTML
    const dailyChecklist = document.querySelector('.daily-checklist');

    // Iterate over each category in the userActivities array
    for (let category of userActivities) {
        // Create a new div element for the category
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('activity');

        // Create an h3 element for the category name
        const categoryHeading = document.createElement('h3');
        categoryHeading.textContent = category.categoryName;
        categoryHeading.innerHTML += ' <i class="fa-solid fa-circle-chevron-down"></i>'; // Add the chevron icon
        categoryDiv.appendChild(categoryHeading);

        // Create a new ul element for the activity types
        const activityList = document.createElement('ul');

        // Iterate over each activity type in the category
        for (let activityType of category.activityTypes) {
            // Create a new li element for each activityName and add it to the activity list
            const activity = document.createElement('li');
            activity.textContent = activityType.activityName;
            activityList.appendChild(activity);
        }

        // Add the activity list to the category div
        categoryDiv.appendChild(activityList);

        // Add the category div to the daily checklist container
        dailyChecklist.appendChild(categoryDiv);
    }








for (let category of userActivities) {
    console.log("catagory: ", category.categoryName)

    for (let activityType of category.activityTypes) {
        console.log("Activity: ", activityType.activityName)

        for (let task of activityType.Tasks) {
            console.log("Tasks: ", task.taskName)
        }

    }
}


// const categoryNameEl = document.getElementById("category-name-el");

// for (let category of userActivities) {
//     console.log("category: ", category.categoryName);
//     const categoryName = document.createElement("span");
//     categoryName.textContent = category.categoryName;
//     categoryNameEl.appendChild(categoryName);
// }

// const categoryNameEl = document.getElementById("categoryNameEl")

// for (let category of userActivities) {
//     console.log("category: ", category.categoryName)
//     categoryNameEl.textContent = category.categoryName

// }

// Hamburger Menu Display on Mobile
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const asideEl = document.getElementById('aside-el');

    menuBtn.addEventListener('click', function () {
        asideEl.style.display = (asideEl.style.display === 'none' || asideEl.style.display === '') ? 'block' : 'none';
    });
})
  


