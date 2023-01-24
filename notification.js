notifyMe();

function notifyMe() {
    if (!("Notification" in window)) {
        // Check if the browser supports notifications
        alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
        // if permissions have already been granted, create a notification
        const notification = new Notification("Notifications enabled");
        alert(notification.title);
    } else if (Notification.permission !== "denied") {
        // ask the user for permission
        Notification.requestPermission().then((permission) => {
        // If the user accepts, then create a notification
        if (permission === "granted") {
            const notification = new Notification("Notifications enabled");
            alert(notification.title);
        }
        });
    }
}