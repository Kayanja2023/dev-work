import { Component } from '@angular/core';

interface Interest {
    title: string;
    desc: string;
    image: string;
    icon: string;
}

@Component({
    selector: 'app-interests',
    templateUrl: './interests.component.html',
    styleUrls: ['./interests.component.css']
})
export class InterestsComponent {
    interests: Interest[] = [
        {
            title: 'Community Teaching',
            desc: 'Empowering local youth with coding basics.',
            image: 'assets/volunteer_1.jpg',
            icon: '🎓'
        },
        {
            title: 'Tech Mentorship',
            desc: 'Guiding junior devs through career growth.',
            image: 'assets/volunteer_2.jpg',
            icon: '🤝'
        },
        {
            title: 'Hackathon Organizing',
            desc: 'Building events that spark innovation.',
            image: 'assets/volunteer_3.jpg',
            icon: '🚀'
        },
        {
            title: 'STEM Outreach',
            desc: 'Inspiring the next generation of engineers.',
            image: 'assets/volunteer_4.jpg',
            icon: '🌱'
        }
    ];
}
