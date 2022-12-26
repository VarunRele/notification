import marki from './images/avatar-mark-webber.webp'
import angelai from './images/avatar-angela-gray.webp'
import jacobi from './images/avatar-jacob-thompson.webp'
import rizkyi from './images/avatar-rizky-hasanuddin.webp'
import kimberlyi from './images/avatar-kimberly-smith.webp'
import chess from './images/image-chess.webp'
import nathani from './images/avatar-nathan-peterson.webp'
import annai from './images/avatar-anna-kim.webp'

const data = {
    mark: {
        image: marki,
        name: 'Mark Webber',
        action: 'reacted to your recent post',
        post: 'My first tournament today!',
        culb: null,
        msg: null,
        time: '1m ago',
        pic: null,
    },
    angela: {
        image: angelai,
        name: 'Angela Gray',
        action: 'followed you',
        post: null,
        culb: null,
        msg: null,
        time: '5m ago',
        pic: null,
    },
    jacob: {
        image: jacobi,
        name: 'Jacob Thompson',
        action: 'has joined your group',
        post: null,
        culb: 'Chess Club',
        msg: null,
        time: '1 day ago',
        pic: null,
    },
    rizky: {
        image: rizkyi,
        name: 'Rizky Hasanuddin',
        action: 'sent you a private message',
        post: null,
        culb: null,
        msg: 'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game.',
        time: '5 days ago',
        pic: null,
    },
    kimberly: {
        image: kimberlyi,
        name: 'Kimberly Smith',
        action: 'commented on your picture',
        post: null,
        culb: null,
        msg: null,
        time: '1 week ago',
        pic: chess,
    },
    nathan: {
        image: nathani,
        name: 'Nathan Peterson',
        action: 'reacted to your recent post',
        post: '5 end-game strategies to increase your win rate',
        culb: null,
        msg: null,
        time: '2 weeks ago',
        pic: null,
    },
    anna: {
        image: annai,
        name: 'Anna Kim',
        action: 'left the group',
        post: null,
        culb: 'Chess Club',
        msg: null,
        time: '2 weeks ago',
        pic: null,
    }
}

export default data