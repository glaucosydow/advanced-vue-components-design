import Vue from 'vue'
import VueRouter from 'vue-router'

import UserSettingsForm from "@/components/UserSettingsForm.vue"
import ExternalLib from "@/components/pages/ExternalLib.vue"
import ModalPage from "@/components/pages/ModalPage.vue"
import NativeButtonPage from "@/components/pages/NativeButtonPage.vue"
import ContactsPage from "@/components/pages/ContactsPage.vue"
import RenderFunctionPage from "@/components/pages/RenderFunctionPage.vue"
import RenderChildrenPage from "@/components/pages/RenderChildrenPage.vue"
import RenderSlotPage from "@/components/pages/RenderSlotPage.vue"
import DataProviderPage from "@/components/pages/DataProviderPage.vue"


Vue.use(VueRouter)

export default new VueRouter({
    routes: [
      {
        path: '/controlled',
        name: 'controlled',
        component: UserSettingsForm
      },
      {
        path: '/external-lib',
        name: 'external-lib',
        component: ExternalLib
      },
      {
        path: '/modal-page',
        name: 'modal-page',
        component: ModalPage
      },
      {
        path: '/button-slots',
        name: 'button-slots',
        component: NativeButtonPage
      },
      {
        path: '/contacts-page',
        name: 'contacts-page',
        component: ContactsPage
      },
      {
        path: '/render-functions',
        name: 'render-functions',
        component: RenderFunctionPage
      },
      {
        path: '/render-children',
        name: 'render-children',
        component: RenderChildrenPage
      },
      {
        path: '/render-slot-page',
        name: 'render-slot-page',
        component: RenderSlotPage
      },
      {
        path: '/data-provider-page',
        name: 'data-provider-page',
        component: DataProviderPage
      }
    ]
  })