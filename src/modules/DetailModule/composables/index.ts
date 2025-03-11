import {onMounted, ref} from "vue";
import DetailService from '../services/index.service.ts';
import {useRoute} from "vue-router";
import type {IDetail} from "../interfaces";

export function useDetailModule() {
    const detail = ref<IDetail>();
    const route = useRoute();

    function updateDetail() {
        DetailService.updateDetailById(route.params.id as string, detail.value)
    }

    onMounted(() => {
        DetailService.getDetailById(route.params.id as string)
            .then((_res: any) => {
                detail.value = _res;
            })
    })
    return {
        detail,
        updateDetail,
    }
}