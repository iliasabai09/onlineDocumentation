import {onMounted, ref} from "vue";
import NavigationService from '../services/index.ts'
import {navigations} from "../constants";

export function useNavigationModule() {
    const categories = ref<any[]>([]);


    function _updateNavigations() {
        NavigationService.getCategories().then((data: any) => {
            if (data && data.length) {
                const cat = data.map((c: any) => {
                    return {
                        type: 'url',
                        label: c.title,
                        data: `/detail/${c.id}`,
                        category: c.category,
                    }
                });
                const navs = [...navigations];
                cat.forEach((c: any) => {
                    navs.find((n: any) => n.data === c.category)?.children.push(c);
                })
                categories.value = navs.filter((c: any) => c.children.length);
            }
        })
    }

    onMounted(() => {
        _updateNavigations()
    })

    return {
        categories
    }
}