import { Component, OnInit, PLATFORM_ID, ChangeDetectorRef, inject, effect } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { appConfig } from '../app.config';


@Component({
    selector: 'chart-doughnut-demo',
    templateUrl: './chart.html',
    standalone: true,
    imports: [ChartModule]
})
export class ChartDoughnutDemo implements OnInit {
    // data: any;

    // options: any;

    // platformId = inject(PLATFORM_ID);

    // configService = inject(appConfig);

    // designerService = inject(DesignerService);

    // constructor(private cd: ChangeDetectorRef) {}

    // themeEffect = effect(() => {
    //     if (this.configService.transitionComplete()) {
    //         if (this.designerService.preset()) {
    //             this.initChart();
    //         }
    //     }
    // });
// 
    // ngOnInit() {
    //     this.initChart();
    // }
// 
    // initChart() {
    //     if (isPlatformBrowser(this.platformId)) {
    //         const documentStyle = getComputedStyle(document.documentElement);
    //         const textColor = documentStyle.getPropertyValue('--p-text-color');
// 
    //         this.data = {
    //             labels: ['A', 'B', 'C'],
    //             datasets: [
    //                 {
    //                     data: [300, 50, 100],
    //                     backgroundColor: [documentStyle.getPropertyValue('--p-cyan-500'), documentStyle.getPropertyValue('--p-orange-500'), documentStyle.getPropertyValue('--p-gray-500')],
    //                     hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400'), documentStyle.getPropertyValue('--p-orange-400'), documentStyle.getPropertyValue('--p-gray-400')]
    //                 }
    //             ]
    //         };
// 
    //         this.options = {
    //             cutout: '60%',
    //             plugins: {
    //                 legend: {
    //                     labels: {
    //                         color: textColor
    //                     }
    //                 }
    //             }
    //         };
    //         this.cd.markForCheck()
    //     }
    // }
}