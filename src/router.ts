import Router, { RouteConfig } from 'vue-router';
import { MemberTablePageContainer } from "./pages/menbers-table";
import { MemberInfoPageContainer } from "./pages/member-info";

const routes: RouteConfig[] = [
    { path: '/', redirect: '/members-page' },
    { path: '/members-page', component: MemberTablePageContainer, props: true },
    { path: '/member/:username', component: MemberInfoPageContainer, props: true },
]

export const router = new Router({
    routes
})