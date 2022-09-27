<template>
    
    <v-combobox v-model="selected" :items="items" label="Síntomas" multiple chips 
          :menu-props="{ maxHeight: '200' }"></v-combobox>
</template>

<script src="../../../components/_entities/Atenciones/Sintoma"></script>