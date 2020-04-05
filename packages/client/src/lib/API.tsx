import axios from "axios";
class API {
  prefix = "http://localhost:9999";
  async getConversation(id: string) {
    try {
      const res = await axios.get(`${this.prefix}/conversations/${id}`);
      return res.data;
    } catch {
      return null;
    }
  }

  async getAllConversation() {
    const res = await axios.get(`${this.prefix}/conversations`);
    return res.data;
  }

  async createConversation(name: string) {
    return this.request("post", "/conversations", { name });
  }
  async getMessages(id: string) {
    const res = await axios.get(`${this.prefix}/conversations/${id}/message`);
    return res.data;
  }

  async createMessages(conversationId: string, content: string) {
    const res = await axios.post(`${this.prefix}/messages`, {
      userId: "2e03fa5f-4e05-4235-a81c-3596d6c87162",
      content,
      conversationId,
    });
    return res.data;
  }

  private async request(type: "get" | "post", url: string, data?: object) {
    const headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    try {
      let res: any;
      if (type === "get") {
        res = await axios.get(`${this.prefix}${url}`, {
          headers,
        });
      }
      if (type === "post") {
        res = await axios.post(`${this.prefix}${url}`, data, {
          headers,
        });
      }
      return res!.data;
    } catch (e) {
      return null;
    }
  }
}
export const api = new API();
