import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
@Injectable({
 providedIn: 'root'
})
export class HousingService {
 readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
 protected housingLocationList: HousingLocation[] = [
 {
 id: 0,
 name: 'Ambrosia Alley Eatery',
 city: 'Chicago',
 state: 'IL',
 photo: `https://assets.architecturaldigest.in/photos/63733ec2a2dd6ea6560eb6da/1
6:9/w_1615,h_908,c_limit/Ditas%20Interior%20Image%20-%201%20(8).png`,
 avgcost: 100,
 timings: '8:00 AM to 11:30 PM',
 wifi: true,
 },
 {
 id: 1,
 name: 'Epicurean Echoes Grill',
 city: 'Santa Monica',
 state: 'CA',
 photo: `https://assets.cntraveller.in/photos/63d8e5103d7229d4cf308f01/16:9/w_19
20,h_1080,c_limit/Prequel-lead.jpg`,
 avgcost: 100,
 timings: '8:00 AM to 11:30 PM',
 wifi: true,
 },
 {
 id: 2,
 name: 'Savory Serenade Eatery',
 city: 'Juneau',
 state: 'AK',
 photo: `https://assets.gqindia.com/photos/62a9d4653e8cdc9b632eb2ad/16:9/w_1920,
h_1080,c_limit/10%20restaurants%20in%20Mumbai%20that%20offer%20the%20best%20sunset%20
views.jpg`,
 avgcost: 100,
 timings: '8:00 AM to 11:30 PM',
 wifi: true,
 },
 {
 id: 3,
 name: 'Aroma Avenue Restaurant',
 city: 'Chicago',
 state: 'IL',
 photo: `https://assets.vogue.in/photos/61e038e8bce2639653e1542b/2:3/w_2560%2Cc_
limit/Goa%2520restaurants.jpg`,
 avgcost: 100,
 timings: '8:00 AM to 11:30 PM',
 wifi: true,
 },
 {
 id: 4,
 name: 'Zestful Zenith Grill',
 city: 'Gary',
 state: 'IN',
 photo: `https://i0.wp.com/stanzaliving.wpcomstaging.com/wpcontent/uploads/2022/04/4ad20-pune-restaurants.jpg?fit=1000%2C667&ssl=1`,
 avgcost: 100,
 timings: '8:00 AM to 11:30 PM',
 wifi: true,
 },
 {
 id: 5,
 name: 'Fusion Feast Junction',
 city: 'Oakland',
 state: 'CA',
 photo: `https://imgmedia.lbb.in/media/2023/01/63d37aa371710d3f45ec1fa8_16748038
75414.jpg`,
 avgcost: 100,
 timings: '8:00 AM to 11:30 PM',
 wifi: true,
 },
 {
 id: 6,
 name: 'Spice Symphony Grill',
 city: 'Oakland',
 state: 'CA',
 photo: `https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=
80`,
 avgcost: 100,
 timings: '8:00 AM to 11:30 PM',
 wifi: true,
 },
 {
 id: 7,
 name: 'Umami Urban Kitchen',
 city: 'Oakland',
 state: 'CA',
 photo: `https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ
0GLSlTBagoXS48.jpg`,
 avgcost: 100,
 timings: '8:00 AM to 11:30 PM',
 wifi: true,
 },
 {
 id: 8,
 name: 'Delectable Destinations Diner',
 city: 'Oakland',
 state: 'CA',
 photo: `https://imgmedia.lbb.in/media/2019/06/5d106d1d4876351e7076933e_15613575
97039.jpg`,
 avgcost: 100,
 timings: '8:00 AM to 11:30 PM',
 wifi: true,
 },
 {
 id: 9,
 name: 'Palate Pleasures Pavilion',
 city: 'Portland',
 state: 'OR',
 photo: `https://hips.hearstapps.com/hmg-prod/images/dsc01939-1638289406.jpg`,
 avgcost: 100,
 timings: '8:00 AM to 11:30 PM',
 wifi: true,
 }
 ];
 getAllHousingLocations(): HousingLocation[] {
 return this.housingLocationList;
 }
 getHousingLocationById(id: number): HousingLocation | undefined {
 return this.housingLocationList.find(housingLocation => housingLocation.id === id
);
 }
 submitApplication(firstName: string, lastName: string, email: string) {
 console.log(`Homes application received: firstName: ${firstName}, lastName: ${las
tName}, email: ${email}.`);
 }
}
