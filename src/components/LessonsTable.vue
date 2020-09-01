<template>
  <table class="lessons-table-root">
    <thead>
      <tr>
        <th>
        </th>
        <th class="header-cell">Дата, время</th>
        <th class="header-cell">Тема занятия</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="lesson in lessons"
          :key="lesson.id"
          class="table-body-row">
        <td class="link-cell">
          <a href="#" class="link"></a> <!-- TODO -->
        </td>
        <td class="table-body-cell">{{ lesson.startedAt | dateFormatted }}</td>
        <td class="table-body-cell title">{{ lesson.title }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const months = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

const isLesson = (obj) => {
  const requiredFields = ['startedAt', 'title', 'id'];

  return requiredFields.every((field) => field in obj);
};
export default {
  name: 'LessonsTable',
  props: {
    lessons: {
      validator(val) {
        if (!Array.isArray(val)) return false;

        return val.every(isLesson);
      },
    },
  },
  filters: {
    dateFormatted(ms) {
      const date = new Date(Number(ms));
      const day = date.getDate();
      const month = date.getMonth();
      const hours = date.getHours().toString().padStart(2, 0);
      const minutes = date.getMinutes().toString().padStart(2, 0);

      return `${day} ${months[month]}, ${hours}:${minutes}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_colors.scss";

.lessons-table-root {
  border-collapse: collapse;
  overflow: hidden;

  .header-cell,
  .table-body-cell {
    padding: 0.5em 1.5em;
  }

  .header-cell {
    background-color: $theme-color;
    color: white;
    font-weight: bold;
  }

  .table-body-row {
    .table-body-cell.title {
      font-weight: 600;
    }

    &:hover {
      .table-body-cell {
        background-color: rgba($theme-color, 0.05);
      }
    }

    border-bottom: 1px solid $gray-100;

    .link-cell {
      position: relative;
      .link {
        width: 100vw;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
      }
    }
  }
}
</style>
