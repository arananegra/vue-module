import Router, { RouteConfig } from 'vue-router';
import { MemberTablePageContainer } from "./pages/menbers-table/components";

const routes: RouteConfig[] = [
    { path: '/', redirect: '/members-page' },
    { path: '/members-page', component: MemberTablePageContainer }
]

export const router = new Router({
    routes
})