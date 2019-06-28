const toggleNav = document.querySelector('.mobileNav__toggle');

toggleNav.addEventListener('click', function() {
    const mobileNav = document.querySelector('.navbar__links-mobile');
    mobileNav.classList.toggle('toggle-mobileNav');
});




class aboutButton {
    constructor(element) {
        this.element = element;
        
        this.jobData = element.dataset.job;

        if (this.jobData === 'all') {
            this.members = document.querySelectorAll('.about__member');
        } else {
            this.members = document.querySelectorAll(`.about__member[data-job = '${this.jobData}']`);
        }

        this.members = Array.from(this.members).map(member => new TeamMember(member));

        this.element.addEventListener('click', () => this.select());
    }

    select() {
        const allMembers = document.querySelectorAll('.about__member');
        allMembers.forEach(member => member.style.display = 'none');
        const allButtons = document.querySelectorAll('.about__button');
        allButtons.forEach(button => button.classList.remove('active__button'));
        this.element.classList.add('active__button');
        this.members.forEach(member => member.active());
    }
}

class TeamMember {
    constructor(element) {
        this.element = element;
    }

    active() {
        this.element.style.display = 'block';
    }
}








let aboutButtons = document.querySelectorAll('.about__button');

aboutButtons.forEach(button => new aboutButton(button));