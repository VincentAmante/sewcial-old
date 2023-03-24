<script lang = "ts">
import { computed } from 'vue';
import IconChevronLeft from './icons/IconChevronLeft.vue';
import IconChevronRight from './icons/IconChevronRight.vue';

export default {
  name: 'Pagination',
  props: {
    totalItems: {
      type: Number,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage));
    const visiblePages = computed(() => {
      const pageRange = 2; // Number of pages to show on either side of the current page
      const minPage = Math.max(1, props.currentPage - pageRange);
      const maxPage = Math.min(totalPages.value, props.currentPage + pageRange);
      const pages = [];
      for (let i = minPage; i <= maxPage; i++) {
        pages.push(i);
      }
      return pages;
    });
    const pages = computed(() => {
      const pageRange = 2; // Number of pages to show on either side of the current page
      const minPage = Math.max(1, props.currentPage - pageRange);
      const maxPage = Math.min(totalPages.value, props.currentPage + pageRange);
      const pages = [];
      for (let i = minPage; i <= maxPage; i++) {
        pages.push(i);
      }
      return pages;
    });

    function changePage(pageNumber: number) {
      emit('page-changed', pageNumber);
    }

    return {
      totalPages,
      visiblePages,
      pages,
      changePage,
    };
  },
};
</script>

<template>
  <nav>
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a href="#" @click="changePage(currentPage - 1)">
          <IconChevronLeft class = "icon"></IconChevronLeft>
        </a>
      </li>
      <li class="page-item" v-if="pages[0] !== 1">
        <a class="page-link" href="#" @click="changePage(pages[0] - 1)">
          &hellip;
        </a>
      </li>
      <li class="page-item" v-for="pageNumber in visiblePages" :key="pageNumber" :class="{ active: currentPage === pageNumber }">
        <a class="page-link" href="#" @click="changePage(pageNumber)">{{ pageNumber }}</a>
      </li>
      <li class="page-item" v-if="pages[pages.length - 1] !== totalPages">
        <a class="page-link" href="#" @click="changePage(pages[pages.length - 1] + 1)">
          &hellip;
        </a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <a href="#" @click="changePage(currentPage + 1)">
          <IconChevronRight class = "icon"></IconChevronRight>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang = "scss">
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  list-style: none;
}

.page-item {
  display: inline-block;
  margin-right: 10px;
}

.page-link {
  padding: 0.25em;
  padding-inline: 0.6em;
  border-radius: 50%;
  color: $clr-secondary;
  text-decoration: none;
}

.icon {
  background-color: $clr-secondary;
  margin:10px;
  color: $clr-secondary;
}

.page-link:hover {
  background-color: #f5f5f5;
}

.page-item.disabled .page-link,
.page-item.disabled .page-link:hover {
  color: #ccc;
  cursor: not-allowed;
}

.page-item.active .page-link {
  background-color: $clr-accent-1;
  color: $clr-primary;
}

.page-item.disabled .page-link,
.page-item.disabled .page-link:hover,
.page-item.active .page-link:hover {
  background-color: $clr-accent-1;
  border-color: $clr-accent-1;
  color: $clr-primary;
  cursor: default;
}
</style>