/**
 * msg
 * @param {*} msg -  Messages for alert boxes, title are the headers used on alert
 * category - specific messages used on 2nd line of alert
 */

 export const MSG = {
    title: {
        title1: "Something went wrong.",
        title2: "Oops!",
        title3: "Invalid file.",
       
    },
    category: {
        general: {
            note1: "Please try again, or contact your administrator.",
            note2: "The document to be uploaded has exceeded the maximum 5MB file size limit.",
            note3: "Please upload an image with a .jpg or .png file extension.",
        },
        email: {
            note1: "Please enter a valid email address."
        },
        clientManagement: {
            note1: 'Basic Information has been saved.',
        }
    }
}