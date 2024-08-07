if (window.location.pathname.indexOf('/debug/') < 0) {
    const styles = document.createElement('style');
    styles.innerText = `
        .socialLink {
            position: fixed;
            font-size: 16px;
            width: 2.5em;
            height: 2.5em;
            border-radius: 100% 0 0 0 / 100% 0 0 0;
            background-color: #777;
            box-shadow: 0 0 5px #0007;
            transform-origin: bottom right;
            transition: all 0.25s;
            cursor: pointer;
            z-index: 9999;
        }

        .facebookLink {
            bottom: 0;
            right: 0;
        }

        .tiktokLink {
            bottom: 0;
            right: 2.5em; /* Adjusted to place next to Facebook */
        }

        .socialLink:hover {
            background-color: #3b5998; /* Default color, change individually */
            box-shadow: 0 0 10px #000;
            transform: scale(1.25);
        }

        .facebookLink:hover {
            background-color: #3b5998;
        }

        .tiktokLink:hover {
            background-color: #25F4EE;
        }

        .socialIcon {
            position: absolute;
            bottom: 0.2em;
            right: 0.2em;
            width: 1.5em;
            height: 1.5em;
            filter: drop-shadow(0 0 2px #0007);
        }
    `;
    document.querySelector('head').appendChild(styles);

    const facebookPath = "https://facebook.com/CyberRide";
    const tiktokPath = "https://www.tiktok.com/@cyberride?lang=en";

    const createSocialLink = (linkClass, iconSrc, path) => {
        const link = document.createElement('a');
        link.classList = `socialLink ${linkClass}`;
        link.addEventListener('click', () => { window.open(path, '_top'); });

        const icon = document.createElement('img');
        icon.classList = "socialIcon";
        icon.src = iconSrc;

        link.appendChild(icon);
        document.querySelector('body').appendChild(link);
    };

    createSocialLink('facebookLink', "https://static.vecteezy.com/system/resources/previews/018/930/476/non_2x/facebook-logo-facebook-icon-transparent-free-png.png", facebookPath);
    createSocialLink('tiktokLink', "https://static.vecteezy.com/system/resources/previews/016/716/450/non_2x/tiktok-icon-free-png.png", tiktokPath);
}
