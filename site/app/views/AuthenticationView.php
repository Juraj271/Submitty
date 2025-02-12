<?php

namespace app\views;

class AuthenticationView extends AbstractView {
    public function loginForm($old = null) {
        if (!isset($old)) {
            $old = urlencode($this->core->buildUrl(['home']));
        }
        $this->core->getOutput()->addInternalCss("input.min.css");
        $this->core->getOutput()->addInternalCss("links.min.css");
        $this->core->getOutput()->addInternalCss("authentication.min.css");
        return $this->core->getOutput()->renderTwigTemplate("Authentication.twig", [
            "login_url" => $this->core->buildUrl(['authentication', 'check_login']) . '?' . http_build_query(['old' => $old])
        ]);
    }
}
