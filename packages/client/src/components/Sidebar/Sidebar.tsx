import "./sidebar.scss";
import React, { useState, useEffect } from "react";
import { api } from "../../lib/API";
import { Conversation, Params } from "../../lib/types";
import { Link, useParams } from "react-router-dom";

export const Sidebar = () => {
  const params = useParams<Params>();

  const [conversation, updateConversation] = useState<Conversation[]>([]);
  useEffect(() => {
    (async function loadInitialData() {
      const allConversation = await api.getAllConversation();
      updateConversation(allConversation);
    })();
  }, [params.conversationID]);

  return (
    <aside>
      <div>
        <Link className="button" to="/c/new">
          +
        </Link>
      </div>
      {conversation && (
        <ul>
          {conversation &&
            conversation.map((c) => (
              <li key={c.id}>
                <Link to={`/c/${c.id}`}>{c.name}</Link>
              </li>
            ))}
        </ul>
      )}
    </aside>
  );
};
