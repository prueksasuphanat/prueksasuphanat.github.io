import axios from "axios";
import { defineStore } from "pinia";

export const useCardStore = defineStore({
  id: "useCardStore",

  state: () => ({
    cards: [],
    key: "c3ee7894-5ccd-4a9b-aa1f-946b53379cb2",
    isLoading: false,
    name: "",
    set: "",
    rarity: "",
    type: "",
  }),

  actions: {
    // name, set, rarity, type
    async select(
      page = 0,
      pageSize = 0,
      name = "",
      set = "",
      rarity = "",
      type = ""
    ) {
      this.isLoading = true;

      let path = `https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=${pageSize}&`;

      let pathQuery = [];

      if (name) {
        pathQuery.push(`name:${name.replaceAll(" ", "*")}*`);

        this.name = name;
      }

      if (set) {
        pathQuery.push(`set.name:${set.replaceAll(" ", "*")}*`);

        this.set = set;
      }

      if (rarity) {
        pathQuery.push(`rarity:${rarity.replaceAll(" ", "*")}*`);

        this.rarity = rarity;
      }

      if (type) {
        pathQuery.push(`types:${type.replaceAll(" ", "*")}`);

        this.type = type;
      }

      if (pathQuery.length > 0) {
        path += `q=${pathQuery.join(" AND ")}`;
      }

      try {
        const response = await axios.get(path, {
          headers: {
            "X-Api-Key": this.key,
          },
        });

        return response.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },

    async getSet() {
      this.isLoading = true;

      try {
        const response = await axios.get("https://api.pokemontcg.io/v2/sets", {
          headers: {
            "X-Api-Key": this.key,
          },
        });

        return response.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },

    async getRarity() {
      this.isLoading = true;

      try {
        const response = await axios.get(
          "https://api.pokemontcg.io/v2/rarities",
          {
            headers: {
              "X-Api-Key": this.key,
            },
          }
        );

        return response.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },

    async getType() {
      this.isLoading = true;

      try {
        const response = await axios.get("https://api.pokemontcg.io/v2/types", {
          headers: {
            "X-Api-Key": this.key,
          },
        });

        return response.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
