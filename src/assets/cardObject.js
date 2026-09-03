// to be hosted publicly on my website
// A Card class that gathers information about a particular
// card and makes that information easily accessible. Also
// Occasionally adds styling to a card

const addPrimeStyles = () => {
	if (document.getElementById('prime-card-styles')) return;

	const style = document.createElement('style');
	style.id = 'prime-card-styles';

	style.textContent = `
        .prime-card-corner {
            position: absolute;
            top: 0;
            right: 0;
            width: 22px;
            height: 22px;
            overflow: hidden;
            z-index: 9999;
            pointer-events: none;
        }

        .prime-card-corner::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;

            width: 0;
            height: 0;

            border-top: 18px solid #22c55e;
            border-left: 18px solid transparent;
        }

        .prime-card-corner::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;

            width: 0;
            height: 0;

            border-top: 22px solid white;
            border-left: 22px solid transparent;

            z-index: -1;
        }
    `;

	document.head.appendChild(style);
};

class Card {
	constructor(container) {
		this.container = container;
		// basic information
		this.season = this.getSeason();
		this.category = this.getCategory();
		this.region = this.getRegion();
		this.id = this.getId();
		this.info = this.getInfo();
		console.log(this.info);

		if (this.isPrime()) {
			console.log('marking as prime');
			this.markAsPrime();
			console.log('marked as prime');
		}
	}

	getSeason() {
		let info = this.container.querySelector('[class^=deckcard][data-season]');
		if (!info) return -1;
		return parseInt(info.getAttribute('data-season'));
	}

	getCategory() {
		let category = this.container.children[0].children[0].classList[1];
		category = category.replace('deckcard-category-', '');
		return category;
	}

	getRegion() {
		return this.container.getElementsByClassName('deckcard-region')[0];
	}

	getId() {
		let infoBtn = this.container.querySelector('.deckcard-info');
		let anchor = infoBtn.querySelector('a');
		console.log('getting id');
		return anchor.href.match(/(?<=\/card=)\d+/)?.[0];
	}

	getInfo() {
		let info = {};
		let isCardPage = window.location.href.includes('card=');
		let infoTable = document.getElementById('rces-infotable');
		if (!isCardPage || !infoTable) {
			//setTimeout(() => this.info = this.getInfo(), 2000)
			return info;
		}

		// get info about card
		let rcesTableRows = [...infoTable.children[0].children];
		rcesTableRows.forEach((row) => {
			let data = [...row.children];
			info[data[0].innerHTML.toLowerCase()] = parseFloat(data[1].innerHTML);
		});

		info.season = this.season;
		info.category = this.category;

		// get bid info
		let unmatchedBids = [...document.getElementsByClassName('cardauctionunmatchedrow-bid')];
		let matchedBids = [...document.getElementsByClassName('cardauction-highestmatchedoffer')];
		let bids = unmatchedBids.concat(matchedBids);
		if (bids.length > 0) {
			info.highestBid = parseFloat(
				bids[bids.length - 1].getElementsByClassName('cardprice')[0].innerHTML
			);
		} else {
			info.highestBid = 0;
		}

		info.mv = info['market value (estimated)'];
		info.recentSellPrice = info['most recent sell price'];
		info.highestSellPrice = info['highest sell price'];
		info.jv = info['junk price'];
		return info;
	}

	iOwn() {
		let minorInfo = document.getElementsByClassName('minorinfo');
		return !(minorInfo.length == 0);
	}

	isExNation() {
		if (!this.region) return false;
		return this.region.innerHTML.includes('Ex-Nation');
	}

	isPrime() {
		let n = this.id;
		if (n <= 1) return false;
		if (n <= 3) return true;
		if (n % 2 === 0 || n % 3 === 0) return false;

		// Only check up to the square root of n
		const limit = Math.sqrt(n);
		for (let i = 5; i <= limit; i += 6) {
			if (n % i === 0 || n % (i + 2) === 0) return false;
		}
		return true;
	}

	isLeg() {
		return this.category == 'legendary';
	}

	junk() {
		let junkBtn = this.container.getElementsByClassName('deckcard-junk-button')[0];
		junkBtn.click();
	}

	giftPage() {
		console.log(`gifting card`);
		let giftBtn = this.container.querySelector('.deckcard-info-cardbuttons').children[1];
		window.open(giftBtn.href + '?tamperAction=gift', '_self');
	}

	infoPage() {
		let infoBtn = this.container.getElementsByClassName('deckcard-info-cardlink')[0];
		let href = infoBtn.children[0].href;
		window.open(href, '_blank');
	}

	manage(tamperAction) {
		let isCardPage = window.location.href.includes('card=');
		if (!isCardPage) return;
		let manageLink = document.querySelector('a.manage_collections_button');
		if (!manageLink) return;
		manageLink.href += `&tamperAction=${tamperAction}`;
		manageLink.click();
	}

	markAsPrime() {
		let flag;

		switch (this.season) {
			case 1:
			case 2:
				flag = this.container.querySelector('.deckcard-flag');
				break;

			case 3:
				flag = this.container.querySelector('.s3-flag');
				break;

			case 4:
				flag = this.container.querySelector('main.flag');
				break;

			default:
				console.warn('Unknown card season:', this.season);
				return;
		}

		if (!flag) return;

		if (flag.querySelector('.prime-card-corner')) {
			return;
		}

		if (getComputedStyle(flag).position === 'static') {
			flag.style.position = 'relative';
		}

		const corner = document.createElement('span');
		corner.className = 'prime-card-corner';

		flag.appendChild(corner);
	}
}
