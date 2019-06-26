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