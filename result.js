function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function splitString(str) {
    const colonIndex = str.indexOf(':');
    const firstPart = str.substring(0, colonIndex);
    const secondPart = str.substring(colonIndex + 1);
    return [firstPart, secondPart];
  }
function resultPage(first,second,third){

    first_img = `images/${first}.png`;
    second_img = `images/${second}.png`;
    third_img = `images/${third}.png`;

    distroImage1 = document.getElementsByClassName('img-res')[1];
    distroImage2 = document.getElementsByClassName('img-res')[0];
    distroImage3 = document.getElementsByClassName('img-res')[2];

    distroText1 = document.getElementById('first-text');
    distroText2 = document.getElementById('second-text');
    distroText3 = document.getElementById('third-text');

    distroText1.innerHTML = capitalize(first);
    distroText2.innerHTML = capitalize(second);
    distroText3.innerHTML = capitalize(third);

    distroImage1.outerHTML = `<img class="img-res" src="${first_img}">`
    distroImage2.outerHTML = `<img class="img-res" src="${second_img}">`
    distroImage3.outerHTML = `<img class="img-res" src="${third_img}">`

    distroImage1 = document.getElementsByClassName('img-res')[0];
    distroImage2 = document.getElementsByClassName('img-res')[1];
    distroImage3 = document.getElementsByClassName('img-res')[2];
    
    // Trigger the animation after a short delay
    setTimeout(() => {
        distroImage1.classList.add('slide-left');
        // distroText1.classList.add('shiny-text');
        distroImage2.classList.add('slide-left');
        // distroText2.classList.add('shiny-text');
        distroImage3.classList.add('slide-left');
        // distroText3.classList.add('shiny-text');
    }, 500);

    features = {
        arch:["Rolling release: Always enjoy the latest software and security updates.","Customization: Build your system from the ground up to match your exact needs.","Vast software ecosystem: Access a wide range of packages through the AUR.","Learning experience: Deepen your understanding of Linux internals.","Community support: Benefit from a vibrant and helpful community"],
        manjaro:["Arch-based: Enjoy the power and flexibility of Arch Linux.","User-friendly: Simplified installation and maintenance processes","Rolling release: Always have the latest software and security updates.","Community support: Benefit from a large and helpful community","Customization: Tailor your system to your preferences."],
        fedora:["Cutting-edge technology: Always be at the forefront of software advancements.","Community-driven: Benefit from a strong and active developer community.","Stability and security: Enjoy a reliable and secure operating system.","Regular updates: Stay up-to-date with the latest software and features.","Extensive package repositories: Access a wide range of applications.","User-friendly: Easy to use, even for beginners."],
        mint:["User-friendly interface: Enjoy a familiar-looking desktop experience","Ease of use: Transition from Windows seamlessly.","Stability and reliability: Experience a smooth and hassle-free computing environment.","Pre-installed applications: Benefit from a wide range of ready-to-use software.","Community support: Access a large and helpful community.","Regular updates: Stay up-to-date with the latest software and security patches."],
        pop:["Productivity-focused: Designed for efficient workflows.","Performance-optimized: Offers smooth and responsive performance.","Clean and intuitive interface: Easy to navigate and use.","Privacy and security: Prioritizes user data protection.","Unique features: Benefit from the Pop Shell workspace and Cosmic desktop environment."],
        ubuntu:["Stability and security: Enjoy a reliable and secure operating system.","Large community support: Benefit from a vast and active community.","User-friendly interface: Easy to navigate and use.","Vast repository of software: Access a wide range of applications.","Regular release schedule: Stay up-to-date with the latest software and security patches."],
        debian:["Stability and reliability: Enjoy a proven and dependable operating system.","Security: Benefit from a strong focus on security and privacy.","Flexibility: Customize your system to your exact needs.","Wide range of applications: Access a vast repository of software.","Server and embedded systems: Ideal for hosting websites, applications, and devices."],
        kde_plasma:["Modern and customizable interface: Tailor your desktop to your preferences.","Extensive customization options: Change themes, widgets, and applets to suit your style.","Wide range of features: Enjoy a variety of built-in tools and utilities.","Integration with KDE applications: Seamlessly interact with other KDE software.","Active community: Benefit from a large and supportive community."],
        kali:["Pre-installed penetration testing tools: Access a wide range of tools for network auditing, vulnerability assessment, and penetration testing.","Rolling release model: Stay up-to-date with the latest tools and security updates.","Customization options: Tailor your Kali Linux environment to your specific needs.","Community support: Benefit from a large and active community of security professionals.","Ethical hacking framework: Use Kali Linux for responsible and legal cybersecurity testing."],
        opensuse:["Stability and reliability: Enjoy a proven and dependable operating system.","User-friendly interface: Easy to navigate and use, even for beginners.","Customization options: Tailor your system to your preferences.","Strong community support: Benefit from a large and active community.","Regular updates: Stay up-to-date with the latest software and security patches."],
        tuxedo:["Optimized for Tuxedo hardware: Enjoy optimal performance and compatibility.","Clean and intuitive interface: Easy to navigate and use.","Pre-configured tools and applications: Benefit from a variety of ready-to-use software.","Based on Ubuntu: Enjoy the stability and security of the Ubuntu platform.","Community support: Access a growing and active community of Tuxedo users."],
        garuda:["Beautiful aesthetics: Enjoy a visually stunning desktop experience.","Performance-focused: Optimized for speed and responsiveness","Rolling release model: Always have the latest software and updates.","Pre-configured themes and wallpapers: Get a visually appealing system out of the box.","Customization options: Tailor your system to your preferences"],
        elementary:["Beautiful and intuitive interface: Enjoy a visually appealing and easy-to-use desktop.","Privacy and security: Prioritize user data protection","Pre-installed applications: Benefit from a variety of ready-to-use software.","Based on Ubuntu: Enjoy the stability and security of the Ubuntu platform","Community support: Access a large and active community of Elementary OS users."],
        parrot:["Pre-installed security tools: Access a wide range of tools for network auditing, vulnerability assessment, and penetration testing.","Rolling release model: Stay up-to-date with the latest tools and security updates.","Customization options: Tailor your Parrot OS environment to your specific needs.","Community support: Benefit from a large and active community of security professionals.","Educational resources: Access tutorials, documentation, and training materials."],
        tails:["Privacy and anonymity: Protect your online activities from surveillance.","Runs entirely from RAM: No data is left behind on the computer after shutdown.","Pre-configured security tools: Benefit from built-in privacy and security features.","Tor network integration: Access the internet anonymously through the Tor network","Regular updates: Stay up-to-date with the latest security patches."],
        qubes:["Compartmentalization and isolation: Separate sensitive data and prevent malware from spreading.","Microkernel architecture: Provides a secure and reliable foundation.","Multiple virtual machines: Create isolated environments for different tasks.","Security templates: Easily configure security settings for different virtual machines.","Integration with security tools: Use Qubes with a variety of security tools and applications."],
        endeavour:["Arch-based: Benefit from the power and flexibility of the Arch Linux platform.","Lightweight and fast: Enjoy a responsive and efficient system.","Streamlined installation: Easy to set up and use.","Stability and reliability: Experience a proven and dependable operating system.","Community support: Access a large and active community of EndeavourOS users."],
        cent:["Stability and reliability: Enjoy a proven and dependable operating system.","Long-term support: Benefit from extended support periods for critical updates and security patches","Predictable release cycle: Plan your deployments and upgrades with confidence.","Server and enterprise focus: Ideal for hosting websites, applications, and services in enterprise environments.","Community support: Access a large and active community of CentOS users."],
        chimera:["Gaming-focused: Optimized for gaming performance and experience","Pre-configured gaming tools: Benefit from a variety of ready-to-use gaming applications.","Low system resource requirements: Run games smoothly on a variety of hardware","Visually appealing interface: Enjoy a stylish and modern desktop.","Arch-based: Benefit from the power and flexibility of the Arch Linux platform."],
        gentoo:["Source-based distribution: Enjoy maximum control over your system's configuration.","Customization options: Tailor your system to your exact needs.","Performance optimization: Fine-tune your system for optimal speed and efficiency.","Flexibility: Choose from a variety of desktop environments and package managers.","Community support: Benefit from a large and active community of Gentoo users."]
        // steam:["Gaming-focused: Optimized for running games through the Steam platform.","Streamlined interface: A simple and intuitive interface designed for gaming.","Pre-installed Steam client: Easily access and play your Steam library","Controller support: Optimized for gamepad and controller input.","Community support: Benefit from a large and active community of SteamOS users."]
    }

    // splitString(features[`${first}`][0]);
    // `<span class="highlight">${splitString(features[`${first}`][0])[0]}</span> ${splitString(features[`${first}`][0])[1]}`;
    // document.getElementById("first-info-1").innerHTML = features[`${first}`][0];
    document.getElementById("first-info-1").innerHTML = `<span class="highlight">${splitString(features[`${first}`][0])[0]}</span> : ${splitString(features[`${first}`][0])[1]}`;
    document.getElementById("first-info-1").style.animation = 'appear 2s 0.2s forwards';
    document.getElementById("first-info-2").innerHTML = `<span class="highlight">${splitString(features[`${first}`][1])[0]}</span> : ${splitString(features[`${first}`][1])[1]}`;
    document.getElementById("first-info-2").style.animation = 'appear 2s 0.4s forwards';
    document.getElementById("first-info-3").innerHTML = `<span class="highlight">${splitString(features[`${first}`][2])[0]}</span> : ${splitString(features[`${first}`][2])[1]}`;
    document.getElementById("first-info-3").style.animation = 'appear 2s 0.6s forwards';
    document.getElementById("first-info-4").innerHTML = `<span class="highlight">${splitString(features[`${first}`][3])[0]}</span> : ${splitString(features[`${first}`][3])[1]}`;
    document.getElementById("first-info-4").style.animation = 'appear 2s 0.8s forwards';
    document.getElementById("first-info-5").innerHTML = `<span class="highlight">${splitString(features[`${first}`][4])[0]}</span> : ${splitString(features[`${first}`][4])[1]}`;
    document.getElementById("first-info-5").style.animation = 'appear 2s 1s forwards';

    
    document.getElementById("second-info-1").innerHTML = `<span class="highlight">${splitString(features[`${second}`][0])[0]}</span> : ${splitString(features[`${second}`][0])[1]}`;
    document.getElementById("second-info-1").style.animation = 'appear 2s 1.2s forwards';
    document.getElementById("second-info-2").innerHTML = `<span class="highlight">${splitString(features[`${second}`][1])[0]}</span> : ${splitString(features[`${second}`][1])[1]}`;
    document.getElementById("second-info-2").style.animation = 'appear 2s 1.4s forwards';
    document.getElementById("second-info-3").innerHTML = `<span class="highlight">${splitString(features[`${second}`][2])[0]}</span> : ${splitString(features[`${second}`][2])[1]}`;
    document.getElementById("second-info-3").style.animation = 'appear 2s 1.6s forwards';
    document.getElementById("second-info-4").innerHTML = `<span class="highlight">${splitString(features[`${second}`][3])[0]}</span> : ${splitString(features[`${second}`][3])[1]}`;
    document.getElementById("second-info-4").style.animation = 'appear 2s 1.8s forwards';
    document.getElementById("second-info-5").innerHTML = `<span class="highlight">${splitString(features[`${second}`][4])[0]}</span> : ${splitString(features[`${second}`][4])[1]}`;
    document.getElementById("second-info-5").style.animation = 'appear 2s 2s forwards';



    document.getElementById("third-info-1").innerHTML = `<span class="highlight">${splitString(features[`${third}`][0])[0]}</span> : ${splitString(features[`${third}`][0])[1]}`;
    document.getElementById("third-info-1").style.animation = 'appear 2s 2.2s forwards';
    document.getElementById("third-info-2").innerHTML = `<span class="highlight">${splitString(features[`${third}`][1])[0]}</span> : ${splitString(features[`${third}`][1])[1]}`;
    document.getElementById("third-info-2").style.animation = 'appear 2s 2.4s forwards';
    document.getElementById("third-info-3").innerHTML = `<span class="highlight">${splitString(features[`${third}`][2])[0]}</span> : ${splitString(features[`${third}`][2])[1]}`;
    document.getElementById("third-info-3").style.animation = 'appear 2s 2.6s forwards';
    document.getElementById("third-info-4").innerHTML = `<span class="highlight">${splitString(features[`${third}`][3])[0]}</span> : ${splitString(features[`${third}`][3])[1]}`;
    document.getElementById("third-info-4").style.animation = 'appear 2s 2.8s forwards';
    document.getElementById("third-info-5").innerHTML = `<span class="highlight">${splitString(features[`${third}`][4])[0]}</span> : ${splitString(features[`${third}`][4])[1]}`;
    document.getElementById("third-info-5").style.animation = 'appear 2s 3s forwards';

    
}


var urlParams = new URLSearchParams(window.location.search);
var first = urlParams.get('first');
var second = urlParams.get('second');
var third = urlParams.get('third');
resultPage(first,second,third);
// resultPage("opensuse","fedora","ubuntu")