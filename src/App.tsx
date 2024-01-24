import "./App.css";
import type { Session } from "@supabase/supabase-js";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect, useState } from "react";
import { router } from "@src/router";
import { RouterProvider } from "react-router-dom";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_PROJECT_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

function App() {
  const [sessions, setSessions] = useState<undefined | null | Session>(
    undefined
  );

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSessions(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSessions(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  console.log(sessions);
  if (!sessions) {
    return (
      <div className="max-w-[500px] m-auto">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={[
            "google",
            "discord",
            "apple",
            "figma",
            "github",
            "linkedin_oidc",
          ]}
          providerScopes={{
            google: "https://www.googleapis.com/auth/drive.readonly",
          }}
        />
      </div>
    );
  } else {
    return <RouterProvider router={router} />;
  }
}

export default App;
