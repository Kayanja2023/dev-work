import { Component } from '@angular/core';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
    experiences = [
        {
            role: 'Graduate R&D Engineer',
            company: 'Clickatell',
            location: 'Cape Town',
            period: 'Feb 2025 – Oct 2025',
            desc: 'Built secure AWS infrastructure (Lambda, S3) and RESTful APIs with authentication. Mantained compliance audit trails.'
        },
        {
            role: 'Junior Data Analyst Intern',
            company: 'Walter Sisulu University',
            location: 'East London',
            period: 'Dec 2023 – Mar 2024',
            desc: 'Built Power BI dashboards for compliance audits and created SQL/Python pipelines to improve data integrity.'
        },
        {
            role: 'ICT Trainee',
            company: 'MyBliss Technologies',
            location: 'East London',
            period: 'Aug 2022 – Aug 2023',
            desc: 'Monitored security of high-traffic WordPress platforms and managed user access configurations.'
        },
        {
            role: 'Digital Skills Trainer',
            company: 'ecoLabs / NEMISA',
            location: 'East London',
            period: 'Aug 2021 – Sep 2021',
            desc: 'Designed digital literacy training for 40+ participants, boosting completion rates by 25%.'
        }
    ];
}
